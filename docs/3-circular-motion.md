---
sidebar_position: 3
slug: /3-circular-motion
---

# Circular motion

## Uniform circular motion

$$
\begin{align*}
\text{Radial acceleration:} && a_{rad} &= \frac{v^2}{r} \\
\text{Period:} && T &= \frac{2\pi r}{v} = 2\pi\sqrt{\frac{r}{a_{rad}}}
\end{align*}
$$

## Object inside rotating cylinder

- $n$: normal force (at the top of the cylinder) acting on the object
- if $n \le 0$ (i.e. $v \le \sqrt{rg}$) then the object loses contact with the surface

$$
\begin{align*}
n &= \frac{mv^2}{r} - mg && \\
v &\gt \sqrt{rg} && \text{if } n \gt 0
\end{align*}
$$

## Conical pendulum

$$
\begin{align*}
a_{rad} &= g\tan\theta \\
T &= 2\pi\sqrt{\frac{L\cos\theta}{g}}
\end{align*}
$$

![Conical pendulum](/img/figures/conical-pendulum.png)

## Car rounding curve without skidding

### Flat curve

$$
\begin{align*}
\frac{mv^2}{r} &= \mu_s mg \\
\therefore v_{max} &= \sqrt{\mu_s gr}
\end{align*}
$$

### Banked curve

$$
\begin{align*}
\sum F_x &= \frac{mv^2}{r} = n\sin\theta + \mu_s n\cos\theta && (1) \\
\sum F_y &= 0 = n\cos\theta - \mu_s n\sin\theta - mg && (2) \\
\therefore v_{max} &= \sqrt{gr\frac{\tan\theta + \mu_s}{1 - \mu_s \tan\theta}} \\
&\ge (v_{flat})_{max}
\end{align*}
$$

![Car rounding banked curve](/img/figures/car-rounding-banked-curve.png)
