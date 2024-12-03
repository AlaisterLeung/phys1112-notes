---
sidebar_position: 9
slug: /9-periodic-motion
---

# Periodic motion

## Simple harmonic motion (SHM)

$$
\begin{align*}
\text{Angular frequency:} && \omega &= 2\pi f = \frac{2\pi}{T} \\
\text{Linear frequency:} && f &= \frac{\omega}{2\pi} \\
\text{Period:} && T &= \frac{1}{f} = \frac{2\pi}{\omega} \\
\end{align*}
$$

### General solution

$$
\begin{align*}
x &= A\cos(\omega t + \phi) \\
v &= -\omega A\sin(\omega t + \phi) \\
v_{max} &= \omega A \\
a &= -\omega^2 A\cos(\omega t + \phi) \\
a_{max} &= \omega^2 A \\
A &= \sqrt{x_0^2 + \frac{v_0^2}{\omega^2}}
\end{align*}
$$

<details>
<summary>

Phase angle $\phi$

</summary>

$$
\begin{align*}
\phi =
\begin{cases}
\tan^{-1}\left(-\dfrac{v_0}{wx_0}\right) & \text{if } x_0 > 0 \\
\tan^{-1}\left(-\dfrac{v_0}{wx_0}\right)+\pi  & \text{if } x_0 < 0
\end{cases}
\end{align*}
$$

It tells the displacement of the particle $x_0$ at $t = 0$: $x_0 = A\cos(0+\phi)$

- $\phi = 0 \rightarrow x_0 = A$
- $\phi = \pi \rightarrow x_0 = -A$
- $\phi = \frac{\pi}{2} \rightarrow x_0 = 0$

</details>

### Simple harmonic oscillators


| Block-spring                                                                | Angular oscillator                                                                      | Simple pendulum                                                                   | Physical pendulum                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| $\omega = \sqrt{\dfrac{k}{m}}$                                              | $\omega = \sqrt{\dfrac{\kappa}{I}}$                                                     | $\omega = \sqrt{\dfrac{g}{L}}$                                                    | $\omega = \sqrt{\dfrac{mgd}{I}}$                                                      |
| $k$: spring constant                                                        | $\kappa$: torsion constant                                                              | $L$: length of the pendulum                                                       | $d$: distance from the pivot to its CG                                                |
| <img src="/img/figures/block-spring.png" alt="Block spring" height="300" /> | <img src="/img/figures/angular-oscillator.png" alt="Angular oscillator" height="300" /> | <img src="/img/figures/simple-pendulum.png" alt="Simple pendulum" height="300" /> | <img src="/img/figures/physical-pendulum.png" alt="Physical pendulum" height="300" /> |

:::info

Conservation of energy in SHM

$$
\begin{align*}
E &= K + U = \frac{1}{2}mv^2 + \frac{1}{2}kx^2 = \frac{1}{2}kA^2 &&\rightarrow\text{ constant}
\end{align*}
$$

:::

## Damped harmonic oscillator

- $b$: damping constant
- $\omega'$: damped angular frequency

$$
\begin{align*}
x &= Ae^{-\left(\frac{b}{2m}\right)t}\cos(\omega't+\phi) \\
\omega' &= \sqrt{\frac{k}{m} - \frac{b^2}{4m^2}}
\end{align*}
$$

:::info

- $b < 2\sqrt{km}$ : under damping (oscillation dies off)
- $b = 2\sqrt{km}$ : critical damping (no oscillation, return to equilibrium in shortest time)
- $b > 2\sqrt{km}$ : over damping (no oscillation)

:::

![Damped harmonic oscillator](/img/figures/damped-harmonic-oscillator.png)

## Forced harmonic oscillation

- $\omega_d$: driving angular frequency

$$
\begin{align*}
A = \dfrac{F_{max}}{\sqrt{(k-m\omega_d^2)^2 + b^2\omega_d^2}}
\end{align*}
$$

:::info[Resonance]

- When $\omega_d \rightarrow \omega$ (natural angular frequency of an undamped oscillator), $A$ reaches maximum (resonance peak)
- Smaller $b$ (lighter damping) gives a sharper peak
- Larger $b$ (stronger damping) reduces and broadens the peak and shifts it to lower frequencies
- If $b \ge 2\sqrt{km}$ , the peak disappears completely

:::

![Forced harmonic oscillation](/img/figures/forced-harmonic-oscillation.png)
