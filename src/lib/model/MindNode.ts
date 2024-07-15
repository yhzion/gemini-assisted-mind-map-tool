export default class Node {
  title: string;
  content: string | null;
  children: Node[];

  constructor(title: string, content: string | null = null) {
      this.title = title;
      this.content = content;
      this.children = [];
  }

  addChild(childNode: Node): void {
      this.children.push(childNode);
  }

  removeChild(childNode: Node): void {
      this.children = this.children.filter(child => child !== childNode);
  }

  getChildren(): Node[] {
      return this.children;
  }
}