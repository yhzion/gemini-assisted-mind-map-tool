import MindNode from "./MindNode";

export class MindMap {
  root: MindNode;

  constructor(rootTitle: string, rootContent: string | null = null) {
      this.root = new MindNode(rootTitle, rootContent);
  }

  addNode(parentNode: MindNode, title: string, content: string | null = null): MindNode {
      const newNode = new MindNode(title, content);
      parentNode.addChild(newNode);
      return newNode;
  }

  removeNode(node: MindNode): void {
      if (node === this.root) {
          throw new Error("Cannot remove the root node");
      }
      const parent = this.findParent(this.root, node);
      if (parent) {
          parent.removeChild(node);
      } else {
          throw new Error("Node not found");
      }
  }

  findParent(currentNode: MindNode, targetNode: MindNode): MindNode | null {
      for (const child of currentNode.getChildren()) {
          if (child === targetNode) {
              return currentNode;
          }
          const parent = this.findParent(child, targetNode);
          if (parent) {
              return parent;
          }
      }
      return null;
  }

  display(node: MindNode = this.root, level: number = 0): void {
      console.log(' '.repeat(level * 2) + `${node.title}: ${node.content}`);
      for (const child of node.getChildren()) {
          this.display(child, level + 1);
      }
  }
}