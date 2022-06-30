doc:
	mkdir -p docs
	protoc --doc_out=docs/ --doc_opt=html,index.html ei/ei.proto
	protoc --doc_out=docs/ --doc_opt=markdown,README.md ei/ei.proto
