import fs from 'fs';
import { Feed } from 'feed';
import { getAllPosts } from '../lib/api'


function generatedRssFeed(): void {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
    const date = new Date();
    // author の情報を書き換える
    const author = {
      name: 'jarinosuke',
      email: 'jarinosuke0808@yahoo.com',
      link: 'https://blog.jarinosuke.com',
    };
  
    // デフォルトになる feed の情報
    const feed = new Feed({
      title: process.env.NEXT_PUBLIC_BASE_NAME || '',
      description: process.env.NEXT_PUBLIC_BASE_DISC,
      id: baseUrl,
      link: baseUrl,
      language: 'ja',
      image: `${baseUrl}/favicon/favicon-32x32.png`,  // image には OGP 画像でなくファビコンを指定
      copyright: `All rights reserved ${date.getFullYear()}, ${author.name}`,
      updated: date,
      feedLinks: {
        rss2: `${baseUrl}/rss/feed.xml`,
        json: `${baseUrl}/rss/feed.json`,
        atom: `${baseUrl}/rss/atom.xml`,
      },
      author: author,
    });
  
    // ローカルファイルや API 経由などでファイルのデータを取得する関数を書く
    const posts = getAllPosts([
      'title',
      'date',
      'slug',
    ])
  
    // feed で定義した情報から各記事での変更点を宣言
    posts.forEach((post) => {
      // post のプロパティ情報は使用しているオブジェクトの形式に合わせる
      const url = `${baseUrl}/posts/${post.slug}`;
      feed.addItem({
        title: post.title,
        description: post.title,
        id: url,
        link: url,
        content: "",
        date: new Date(post.date),
      });
    });
  
    // フィード情報を public/rss 配下にディレクトリを作って保存
    fs.mkdirSync('./public/rss', { recursive: true });
    fs.writeFileSync('./public/rss/feed.xml', feed.rss2());
    fs.writeFileSync('./public/rss/atom.xml', feed.atom1());
    fs.writeFileSync('./public/rss/feed.json', feed.json1());
  }
  
  export default generatedRssFeed;