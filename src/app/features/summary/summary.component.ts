import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  totalClaims: number = 23;

  private chartColors = [
    '#8D6B94',  // Púrpura galaxia
    '#726DA8',  // Azul espacial
    '#7D8CC4',  // Azul nebulosa
    '#A0D2DB',  // Azul estrella
    '#BEE7E8'   // Azul polvo estelar
  ];

  // Opciones base para todos los gráficos
  private baseOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          padding: 20,
          font: {
            size: 12
          }
        }
      }
    }
  };

  // Gráfico por Empresa
  public companyChartData: ChartData = {
    labels: ['Promart', 'Oechsle', 'plazaVea', 'Vivanda'],
    datasets: [{
      data: [300, 500, 200, 50],
      backgroundColor: [
        this.chartColors[0],
        this.chartColors[2],
        this.chartColors[3],
        this.chartColors[4]
      ],
      borderWidth: 0
    }]
  };

  public companyChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          padding: 20,
          font: {
            size: 12
          }
        }
      }
    },
    layout: {
      padding: 20
    }
  };

  // Gráfico por Estado
  public statusChartData: ChartData = {
    labels: ['Pendiente', 'En revisión', 'Cerrada', 'Anulada'],
    datasets: [{
      data: [50, 30, 20, 25],
      backgroundColor: [
        this.chartColors[0],
        this.chartColors[2],
        this.chartColors[3],
        this.chartColors[4]
      ],
      borderWidth: 0
    }]
  };

  public statusChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          font: {
            size: 12
          }
        }
      }
    },
    layout: {
      padding: 20
    },
    cutout: '60%'
  } as any; // Usamos 'as any' para el cutout que es específico de doughnut

  // Gráfico por Motivo
  public reasonChartData: ChartData = {
    labels: ['Fecha de Entrega Incumplida', 'Producto con Defectos','Problemas con Personal'],
    datasets: [{
      label: 'Cantidad',
      data: [65, 59, 80],
      backgroundColor: [
        this.chartColors[0],
        this.chartColors[2],
        this.chartColors[3]
      ],
      borderColor: this.chartColors[0],
      borderWidth: 1,
      borderRadius: 5
    }]
  };

  public reasonChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#f0f0f0'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    layout: {
      padding: 10
    }
  };

  constructor() { }

  ngOnInit(): void { }
}
