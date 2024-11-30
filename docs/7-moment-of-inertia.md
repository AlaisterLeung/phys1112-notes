---
sidebar_position: 7
slug: /7-moment-of-inertia
---

# Moment of inertia

<details>
<summary>Basic info (click to expand)</summary>

-   $s = r\theta$ , $\omega = \frac{d\theta}{dt}$ , $\alpha = \frac{d\omega}{dt}$
-   **Anticlockwise** rotation: $\Delta\theta > 0$
-   Direction of $\vec\omega$ is defined by the **right-hand thumb rule**

$$
\begin{align*}
v_{tan} &= r\omega \\
a_{tan} &= r\alpha \\
a_{rad} &= \frac{v^2}{r} = \omega^2 r
\end{align*}
$$

</details>

-   $\rho = \frac{M}{L}$ (density of the rod)

$$
\begin{align*}
I &= \sum\limits_i m_i r_i^2 = \int r^2dm = \int r^2\rho dr \\
K &= \frac{1}{2}I\omega^2
\end{align*}
$$

## Moments of inertia of various bodies

![Moments of inertia of various bodies](/img/figures/moment-of-inertia-of-various-bodies.png)

## Parallel axis theorem

-   $I_p$: $I$ about an axis parallel to the axis through its center of mass
-   $I_{cm}$: $I$ about an axis through its center of mass
-   $M$: total mass of the rigid body
-   $d$: perpendicular distance between the two axises

$$
\begin{align*}
I_p &= I_{cm} + Md^2
\end{align*}
$$

## Torque

-   $\theta$: angle (anticlockwise) from the radial arm to the line of action
-   Direction of $\vec\tau$ is defined by the **right-hand thumb rule**

$$
\begin{align*}
\vec\tau &= \vec r \times \vec F \\
\tau &= rF\sin\theta \\
&= I\alpha \\
W &= \int \tau d\theta \\
P &= \tau\omega
\end{align*}
$$

## Rolling up/down without slipping

-   $\vec v_{cm} = r\omega$
-   Contact point must be **at rest**: $\vec v = 0$
-   There must be static friction which is **always up the slope**, but it does **no work**
