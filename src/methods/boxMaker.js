export default function (obj, blessed) {
    return blessed.box({
        top: obj.top,
        left: obj.left,
        width: obj.width,
        height: obj.height,
        content: obj.content,
        tags: obj.tags,
        border: obj.border,
        style: obj.style
    })
}

