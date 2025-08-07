// type Section = Record<Key, Value>;
// type Key = string;
// type Value = string | Group;

class Parser {
  // root: Section;
  // sections: Record<string, Section>;

  start() {
    //
  }

  end() {
    //
  }

  parse(remains: string) {
    if (remains.startsWith("(")) {
      this.startGroup(remains.substring(1));
    }
  }

  startGroup(remains: string) {
    //
  }

  endGroup(content: string) {
    //
  }
}
