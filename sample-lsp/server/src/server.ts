import { TextDocument } from "vscode-languageserver-textdocument";
import { createConnection, InitializeParams, InitializeResult, ProposedFeatures, TextDocuments, TextDocumentSyncKind } from "vscode-languageserver/node";


const connection = createConnection(ProposedFeatures.all)
export const documents = new TextDocuments(TextDocument)

connection.onInitialize((params: InitializeParams): InitializeResult => {
    return {
        capabilities: {}
    }
})

documents.listen(connection)
connection.listen()