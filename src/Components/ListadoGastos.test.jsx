import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ListadoGastos from "./ListadoGastos";

describe("ListadoGastos", () => {
  it("renderiza correctamente los gastos recibidos", () => {
    const gastosMock = [
      {
        id: "gasto-1",
        nombre: "Supermercado",
        cantidad: 1500,
        fecha: new Date(2026, 9, 4, 15, 30),
      },
    ];

    render(<ListadoGastos gastos={gastosMock} />);

    expect(screen.getByText(/Supermercado/i)).toBeInTheDocument();
    expect(screen.getByText(/\$1500/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Tus Gastos/i })).toBeInTheDocument();
  });

  it("renderiza la fecha y la hora del gasto", () => {
    const fechaTest = new Date(2026, 9, 4, 15, 30);
    const gastosMock = [
      {
        id: "gasto-1",
        nombre: "Transporte",
        cantidad: 300,
        fecha: fechaTest,
      },
    ];

    const { container } = render(<ListadoGastos gastos={gastosMock} />);
    const fechaSpan = container.querySelector(".fecha-gasto");

    expect(fechaSpan).toBeInTheDocument();
    expect(fechaSpan?.textContent).toContain("2026");
    expect(fechaSpan?.textContent).toContain("15");
    expect(fechaSpan?.textContent).toContain("30");
  });
});
