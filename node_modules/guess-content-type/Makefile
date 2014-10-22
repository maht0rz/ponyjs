build:
	mkdir -p lib
	rm -rf lib/*
	node_modules/.bin/coffee --compile -m --output lib/ src/

watch:
	node_modules/.bin/coffee --watch --compile --output lib/ src/
	
test:
	node_modules/.bin/mocha

jumpstart:
	curl -u 'meryn' https://api.github.com/user/repos -d '{"name":"guess-content-type", "description":"Guesses (MIME) Content-Type (including charset) based on file name.","private":false}'
	mkdir -p src
	touch src/guess-content-type.coffee
	mkdir -p test
	touch test/guess-content-type.coffee
	npm install
	git init
	git remote add origin git@github.com:meryn/guess-content-type
	git add .
	git commit -m "jumpstart commit."
	git push -u origin master

.PHONY: test