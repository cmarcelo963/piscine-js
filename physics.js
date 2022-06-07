function getAcceleration ({f, m, t, d, Δv, Δt}) {
    if (f !== undefined && m !== undefined) {
        return f/m
    } else if (d !== undefined && t !== undefined) {
            return ((2*d) / (t*t)) 
    } else if (Δv !== undefined && Δt !== undefined) {
            return Δv/Δt
    } else {
        return 'impossible'
    }
}