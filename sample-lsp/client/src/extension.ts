import path from 'path';
import * as vscode from 'vscode';
import { LanguageClient, LanguageClientOptions, ServerOptions, TransportKind } from 'vscode-languageclient/node'


let client: LanguageClient

export function activate(context: vscode.ExtensionContext) {
	const serverPath = context.asAbsolutePath(
		path.join('server', 'out', 'server.js')
	)

	const serverOptions: ServerOptions = {
		run:   { module: serverPath, transport: TransportKind.ipc },
		debug: { module: serverPath, transport: TransportKind.ipc }
	}
	const clientOptions: LanguageClientOptions = {
		documentSelector: [{ scheme: 'file', language: 'plaintext' }] // TODO: change
	}

	client = new LanguageClient('sampleLSP', 'Sample LSP', serverOptions, clientOptions) // TODO: change
	client.start()
}

export function deactivate() {
	return client?.stop()
}
