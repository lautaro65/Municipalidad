# Animaciones Dinámicas - Villa Esperanza

## 🎨 Animaciones Implementadas

### 1. **Animaciones de Entrada (Fade In)**
- **fadeInUp**: Elementos aparecen desde abajo hacia arriba
- **fadeInLeft**: Elementos aparecen desde la izquierda
- **fadeInRight**: Elementos aparecen desde la derecha
- **scaleIn**: Elementos aparecen con efecto de escala
- **slideInTop**: Elementos aparecen deslizándose desde arriba

### 2. **Animaciones de Iconos**
- **bounce**: Efecto de rebote suave
- **pulse**: Efecto de pulso lento
- **float**: Efecto de flotación
- **rotate**: Rotación continua

### 3. **Efectos de Hover**
- **hover-lift**: Elementos se elevan al pasar el mouse
- **hover-glow**: Efecto de brillo al pasar el mouse
- **icon-bounce**: Iconos rebotan al hacer hover

### 4. **Animaciones Especiales**
- **typing-effect**: Efecto de escritura para títulos
- **shimmer**: Efecto de brillo deslizante
- **AnimatedCounter**: Contador animado para estadísticas
- **ParallaxElement**: Efecto de parallax

### 5. **Efectos de Scroll**
- **ScrollProgress**: Barra de progreso de scroll
- **AnimatedCard**: Cards que aparecen secuencialmente
- **AnimatedElement**: Elementos que aparecen al hacer scroll

## 🚀 Componentes de Animación

### AnimatedElement
```tsx
<AnimatedElement animation="fadeInUp" delay={0.2}>
  <div>Contenido animado</div>
</AnimatedElement>
```

### AnimatedCard
```tsx
<AnimatedCard index={0}>
  <Card>Contenido de la card</Card>
</AnimatedCard>
```

### AnimatedIcon
```tsx
<AnimatedIcon animation="bounce">
  <Icon />
</AnimatedIcon>
```

### AnimatedCounter
```tsx
<AnimatedCounter end={157} suffix="" />
```

## 🎯 Secciones Animadas

### 1. **Hero Section**
- Badge con animación slideInTop
- Título principal con efecto typing
- Botones con efectos hover-lift y shimmer
- Estadísticas con contadores animados
- Partículas flotantes en el fondo

### 2. **Servicios Principales**
- Título con fadeInUp
- Cards con aparición secuencial
- Iconos con animación bounce
- Efectos hover mejorados

### 3. **Noticias Destacadas**
- Header con fadeInUp
- Cards con aparición secuencial
- Iconos animados
- Botones con efectos hover

### 4. **Contacto de Emergencia**
- Contenido con fadeInUp
- Botones con shimmer y hover-lift
- Iconos animados

## 🎨 Efectos Visuales Adicionales

### Partículas Flotantes
- Elementos decorativos que flotan en el hero
- Diferentes tamaños y velocidades
- Efecto de profundidad

### Fondos Decorativos
- Círculos difuminados en secciones
- Efectos de profundidad con blur
- Colores temáticos de la marca

### Barra de Progreso
- Indicador de progreso de scroll
- Color primario de la marca
- Transición suave

## 📱 Responsive

Todas las animaciones están optimizadas para:
- **Desktop**: Animaciones completas
- **Tablet**: Animaciones adaptadas
- **Mobile**: Animaciones simplificadas

## ⚡ Performance

- Animaciones optimizadas con `transform` y `opacity`
- Uso de `will-change` para mejor rendimiento
- Intersection Observer para animaciones de scroll
- RequestAnimationFrame para animaciones fluidas

## 🛠️ Personalización

### Cambiar Velocidades
```css
.animate-fade-in-up {
  animation-duration: 1.2s; /* Cambiar duración */
}
```

### Agregar Nuevas Animaciones
```css
@keyframes nueva-animacion {
  from { /* estado inicial */ }
  to { /* estado final */ }
}

.animate-nueva-animacion {
  animation: nueva-animacion 0.8s ease-out forwards;
}
```

### Modificar Delays
```tsx
<AnimatedElement delay={0.5}> // Cambiar delay
```

## 🎯 Uso Recomendado

1. **Hero Section**: Usar animaciones llamativas para captar atención
2. **Contenido**: Usar animaciones sutiles para mejorar UX
3. **Call-to-Action**: Usar efectos hover para incentivar interacción
4. **Scroll**: Usar animaciones de aparición para mantener engagement

## 🔧 Mantenimiento

- Las animaciones están centralizadas en `src/components/animation-utils.tsx`
- Los estilos están en `src/app/globals.css`
- La configuración de Tailwind está en `tailwind.config.js`
- Documentación actualizada en este archivo

---

**¡Tu página web ahora es mucho más dinámica y atractiva!** 🎉
