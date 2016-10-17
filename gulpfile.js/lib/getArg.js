module.exports = (key) => {
    const
        index = process.argv.indexOf(key),
        next = process.argv[index + 1];

    return (index < 0) ? null : (!next || next[0] === '-') ? true : next;
};
