# Installing dependencies and dev dependencies
# package versions as specified by Phylotree 
for i in $(cat deps/deps.txt);do
	npm install --save $i
done;

for i in $(cat deps/dev_deps.txt);do
	npm install --save-dev $i
done;
