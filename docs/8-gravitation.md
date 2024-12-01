---
sidebar_position: 8
slug: /8-gravitation
---

# Gravitation

## Newton's law of universal gravitation

- $G = 6.67 \times 10^{-11}\space\text{N}\cdot\text{m}^2/\text{kg}^2$ (**gravitational constant**)

$$
\begin{align*}
F_g = \frac{Gm_1m_2}{r^2} && \text{where } r > r_1 \text{ and } r > r_2
\end{align*}
$$

:::info

- It only holds true if the spherically symmetric bodies lie **outside** of each other. See [shell theorem](#shell-theorem)
- Gravitational forces form an action-reaction pair

:::

### Weight

- $M$: mass of the planet
- $R$: radius of the planet

$$
\begin{align*}
\text{Acceleration due to gravity:} &&  g_0 &= \frac{GM}{R^2} \\
\text{True weight at the poles:} && W_0 &= mg_0 \\
\text{Apparent weight at the equator:} && W &= mg_0 - \frac{mv^2}{R} \\
\end{align*}
$$

### Gravitational PE away from planet surface

$$
\begin{align*}
U &= -\frac{GMm}{r}
\end{align*}
$$

:::info

- If $r = \infty$, $U = 0$
- As $U < 0$, $U$ decreases (more negative) as $r$ decreases

:::

### (Minimum) escape speed

If a projectile is launched vertically, ignoring air resistance

$$
\begin{align*}
\frac{1}{2}mv^2 + \left(-\frac{GMm}{R}\right) &= 0 + 0 && (\text{since }v \rightarrow 0 \text{ and } r \rightarrow \infty) \\
\therefore v_{esc} &= \sqrt{\frac{2GM}{R}}
\end{align*}
$$

:::info

Schwarzschild radius $r_s$

$$
\begin{align*}
c = \sqrt{\frac{2GM}{r_s}} &&\rightarrow&& r_s = \frac{2GM}{c^2}
\end{align*}
$$

:::

### Satellite circular orbit

$$
\begin{align*}
\frac{mv^2}{r} &= \frac{GMm}{r^2} \\
\therefore v_{circ} &= \sqrt{\frac{GM}{r}} \\
T &= \frac{2\pi r}{v} = \frac{2\pi r^{\frac{3}{2}}}{\sqrt{GM}} \\
E_{orbit} &= \frac{U}{2} = -\frac{GMm}{2r}
\end{align*}
$$

:::info

For a larger orbit, total energy and potential energy are larger (less negative), but kinetic energy is smaller

:::

### Shell theorem

#### Body lies inside Earth (uniform density)

$$
\begin{align*}
F_g = \frac{GM_Em}{R_E^3}r && \text{where } r < R_E
\end{align*}
$$

#### Body lies inside a hollow sphere

- $R$: radius of the ring of mass $M$

$$
\begin{align*}
U &= -\frac{GMm}{R} \\
F_g &= 0
\end{align*}
$$

## Kepler's laws of planetary motion

### First law: elliptical orbit around the Sun

- $a$: length of semi-major axis
- $b$: length of semi-minor axis
- Aphelion is the farthest point from Sun
- Perihelion is the closest point to Sun

$$
\begin{align*}
\text{Equation:} && \frac{x^2}{a^2} &+ \frac{y^2}{b^2} = 1 \\
\text{Foci:} && \pm     c &= \sqrt{a^2 - b^2} \\
\text{Eccentricity:} && e &= \sqrt{1 - \frac{b^2}{a^2}} \\
\text{Aphelion:} && r_{max} &= a(1+e) \\
\text{Perihelion:} && r_{min} &= a(1-e) \\
\end{align*}
$$

![Elliptical orbit around the Sun](/img/figures/elliptical-orbit-around-the-sun.png)

<details>
<summary>Second law: constant sector velocity</summary>

- $A$: area swept by the planet in time $t$
- $L$: angular momentum of the planet which is **constant**, ignoring precession

$$
\begin{align*}
\frac{dA}{dt} &= \frac{1}{2}r^2\frac{d\theta}{dt} \\
&= \frac{1}{2M}Mvr\sin\theta \\
&= \frac{L}{2M}
\end{align*}
$$

</details>

### Third law: period of elliptical orbit

- $a$: length of semi-major axis
- $Ms$: mass of Sun

$$
\begin{align*}
T = \frac{2\pi a^{3/2}}{GM_s}
\end{align*}
$$
