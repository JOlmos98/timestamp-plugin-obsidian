import { Plugin, Editor } from "obsidian";

export default class TimestampPlugin extends Plugin {
  async onload() {
    this.addCommand({
      id: "insert-utc-timestamp",
      name: "Insert timestamp (UTC ISO 8601)",
      editorCallback: (editor: Editor) => {
        // ISO completo trae milisegundos: 2025-10-25T16:12:34.567Z
        // Los quitamos para quedar en YYYY-MM-DDTHH:MM:SSZ
        const ts = new Date().toISOString().slice(0, 19) + "Z";
        // Inserta en la selección actual (o cursor si no hay selección)
        editor.replaceSelection(ts);
      },
    });
  }

  onunload() {
    // Nada que limpiar en este caso
  }
}
