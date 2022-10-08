langs = cpp csharp java js kotlin objc python ruby

doc: protos
	mkdir -p docs
	protoc --doc_out=docs/ --doc_opt=html,index.html ei/ei.proto
	protoc --doc_out=docs/ --doc_opt=markdown,README.md ei/ei.proto

protos:
	mkdir -p ei/go
	cp ei.proto ei/
	cp ei.proto ei/go/
	echo option go_package = \"github.com/elgranjero/EggUtils/ei\"\; >> ei/go/ei.proto
	protoc -I=ei/ --go_out=ei/go/ ei/go/ei.proto
	mv ei/go/github.com/elgranjero/EggUtils/ei/ei.pb.go ei/go/
	rm -rf ei/go/github.com
	for lang in $(langs); do mkdir -p ei/$${lang}; protoc -I=ei/ --$${lang}_out=ei/$${lang}/ ei/ei.proto || :; done
	
