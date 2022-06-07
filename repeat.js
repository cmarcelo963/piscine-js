function repeat(s,  i) {
    if (!i >= 0) {
        return
    }

    let toPrint = ""
    for (a = i; i !== 0; i--) {
        toPrint += s
    }

    return toPrint
}