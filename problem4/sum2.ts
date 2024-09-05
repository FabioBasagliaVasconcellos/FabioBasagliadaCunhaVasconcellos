func sum_to_n_b(n: number): number {
    if (n == 1) return 1;
    return n + sum_to_n_b(n -1);
}