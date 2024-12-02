---
sidebar_position: 6
slug: /6-momentum
---

# Momentum

- SI unit: kg $\cdot$ m/s

## Linear momentum

$$
\begin{align*}
\vec p &= m \vec v \\
\vec F_{net} &= \frac{d\vec p}{dt}
\end{align*}
$$

### Impulse

$$
\begin{align*}
\vec J &= \vec F_{net} \Delta t = \Delta\vec p \\
&= \int_{t_1}^{t_2}\vec F_{net} dt
\end{align*}
$$

## Angular Momentum

- Directions of $\vec\omega$ and $\vec L$ are the same (**right-hand thumb rule**)

$$
\begin{align*}
\vec L &= \vec r \times \vec p \\
\frac{d\vec L}{dt} &= \vec r \times \vec F = \vec \tau \\
L &= mvr\sin\theta \\
L &= I\omega
\end{align*}
$$

:::warning

$L = I\omega$ is true only if $\vec L$ is along the rotation axis

:::

## Collisions

:::info

- **Total momentum** is conserved
- **Elastic collision**: KE conserved, total energy conserved
- **Inelastic collision**: KE decreases during collision
- **Completely inelastic collision**: Objects stick together, KE decreases greatly during collision

:::

### Elastic collision

$$
\begin{align*}
v_{A0} - v_{B0} = -(v_{A1} - v_{B1})
\end{align*}
$$

:::info[Special case: object B is initially at rest]

$$
\begin{align*}
v_{A1} &= \left(\frac{m_A - m_B}{m_A + m_B}\right) v_{A0} \\
v_{B1} &= \left(\frac{2m_A}{m_A + m_B}\right) v_{A0}
\end{align*}
$$

:::
