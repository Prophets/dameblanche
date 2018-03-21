module.exports = (key) => {
    const index = process.argv.indexOf(key);
    const next = process.argv[index + 1];

    if (index < 0) {
        return null;
    } else if (!next || next[0] === '-') {
        return true;
    }

    return next;
};
