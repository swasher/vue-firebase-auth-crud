dummy:
	@echo Dont run without arguments!

deploy:
	npm run build
	firebase deploy --only hosting:kinozal