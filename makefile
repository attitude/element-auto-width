#
# BUILD JS
#

elementautowidth:
	echo "/**\n * elementautowidth.js by @martin_adamko\n *\n * Copyright 2012 Attitude.sk\n * http://www.apache.org/licenses/LICENSE-2.0.txt\n */" > copyright.js
	java -jar ../closure-compiler.jar --compilation_level SIMPLE_OPTIMIZATIONS --js elementautowidth.js --js_output_file _elementautowidth.min.js
	cat copyright.js _elementautowidth.min.js > elementautowidth.min.js
	rm copyright.js _elementautowidth.min.js
