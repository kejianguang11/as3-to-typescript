var Node = (function () {
    function Node(kind, start, end, text, children) {
        this.kind = kind;
        this.start = start;
        this.end = end;
        this.text = text;
        this.children = children;
        if (!this.children) {
            this.children = [];
        }
    }
    Node.prototype.findChild = function (type) {
        for (var i = 0; i < this.children.length; i++) {
            if (this.children[i].kind === type) {
                return this.children[i];
            }
        }
        return null;
    };

    Node.prototype.findChildren = function (type) {
        return this.children.filter(function (child) {
            return child.kind === type;
        });
    };

    Node.prototype.getChildFrom = function (type) {
        var child = this.findChild(type);
        if (!child) {
            return this.children.splice(0);
        } else {
            var index = this.children.indexOf(child);
            return this.children.slice(index + 1);
        }
    };

    Object.defineProperty(Node.prototype, "lastChild", {
        get: function () {
            return this.children[this.children.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    return Node;
})();

module.exports = Node;