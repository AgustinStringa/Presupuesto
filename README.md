# Administrador de Presupuesto Semanal

Aplicación web desarrollada con **React** y **Vite** para gestionar y controlar el presupuesto semanal y los gastos personales en tiempo real.

## Descripción

La aplicación permite al usuario definir un presupuesto monetario inicial y llevar un registro detallado de cada gasto (concepto y monto). A medida que se agregan gastos, calcula automáticamente el saldo restante y ajusta alertas visuales de advertencia según el porcentaje de saldo disponible, permitiendo además expandir el presupuesto y persistir los datos en el navegador.

## Características principales

- **Gestión interactiva del presupuesto:**
  - Definición de presupuesto inicial con validación numérica.
  - Registro de gastos con descripción, monto y generación de identificadores únicos (`shortid`).
  - Posibilidad de expandir o adicionar fondos al presupuesto existente en cualquier momento.
- **Alertas dinámicas por porcentaje de saldo:**
  - Lógica modular en helper (`control-restante-helper.js`) que asigna estilos visuales en función del presupuesto remanente:
    - **Verde (éxito):** Más del 75% disponible.
    - **Amarillo (advertencia):** Entre el 50% y el 75% disponible.
    - **Rojo (peligro):** Menos del 50% disponible o saldo agotado.
- **Persistencia local:** Botones dedicados para guardar o limpiar el estado completo (presupuesto, saldo restante y listado de gastos) en `localStorage`.
- **Componentes compartidos:** Integración de encabezado y pie de página compartidos (`Header`, `Footer`) del espacio de trabajo.

## Stack tecnológico

- **React 17** (Hooks: `useState`, `useEffect`, PropTypes)
- **Vite** (Build tool y servidor de desarrollo ultrarrápido)
- **Tailwind CSS v4** y estilos CSS modulares
- **shortid** para la generación de claves e identificadores de elementos
- **Vitest** y **Testing Library** para pruebas unitarias de componentes

## Scripts disponibles

En el directorio del proyecto puedes ejecutar:

```bash
# Iniciar servidor de desarrollo en http://localhost:5173
npm start

# Compilar para producción
npm run build

# Previsualizar el bundle de producción
npm run preview

# Ejecutar tests con Vitest
npm test -- --run
```
