new-post:
ifndef slug
	$(error slug is required: make new-post slug=my-new-post [title="My Title"] [description="..."])
endif
	@node scripts/newPost.js "$(slug)" "$(title)" "$(description)"
