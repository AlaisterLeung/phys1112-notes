---
sidebar_position: 4
slug: /4-work-and-ke
---

# Work and kinetic energy

## Kinetic energy

$$
\begin{align*}
\text{Translational:} && K &= \frac{1}{2}mv^2 \\
\text{Rotational: } && K &= \frac{1}{2}I\omega^2
\end{align*}
$$

## Work done

$$
\begin{align*}
\text{Work-energy theorem:} && W &= \Delta E = \Delta K + \Delta U \\
\text{Constant force:} && W &= \vec F \cdot \vec s = |F||s|\cos\theta \\
\text{Varying force:} && W &= \int \vec F \cdot d \vec x \\
\text{Torque:} && W &= \int \tau d\theta
\end{align*}
$$

### Power

$$
\begin{align*}
&& P &= \frac{dW}{dt} \\
\text{Translational:} && P &= \vec F \cdot \vec v \\
\text{Rotational:} && P &= \tau\omega
\end{align*}
$$

## Motion on a circular path

<details>
<summary>Example: person on a swing</summary>

- $W_T$: work done by tension
- $W_F$: work done by external push
- $W_W$: work done by weight
- $r$: radius of the curved path
- $l$: displacement of the person

$$
\begin{align*}
W_T &= 0 \\
W_F &= \int_0^\theta F\cos\theta dl = mgr(1-\cos\theta) \\
W_W &= \int_0^\theta mg\cos(\frac{\pi}{2}+\theta) dl = -mgr(1-\cos\theta) \\
W_{net} &= W_T + W_F + W_W = 0
\end{align*}
$$

![Motion on a curved path](/img/figures/motion-on-a-curved-path.png)

</details>
