<script lang="ts">
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';

  export let categories: string[] = [];
  export let series = [
    {
      name: 'Revenue',
      data: []
    }
  ];

  // Only load ApexCharts in the browser
  let ApexChart: any = null;

  onMount(async () => {
    if (browser) {
      const module = await import('svelte-apexcharts');
      ApexChart = module.default;
    }
  });

  $: options = {
    chart: {
      toolbar: { show: false },
      sparkline: { enabled: true },
      fontFamily: 'Inter, sans-serif'
    },
    stroke: {
      curve: 'smooth' as const,
      width: 3
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.05
      }
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories,
      labels: {
        style: {
          colors: '#8c766d'
        }
      }
    },
    yaxis: {
      labels: {
        style: { colors: '#8c766d' }
      }
    },
    colors: ['#b87580', '#e8a9b1'],
    grid: {
      borderColor: '#e8e2de'
    },
    tooltip: {
      theme: 'light'
    }
  };
</script>

{#if browser && ApexChart}
  <ApexChart type="area" {series} {options} height={260} />
{:else}
  <!-- Elegant loading placeholder that matches your design -->
  <div class="h-[260px] w-full rounded-2xl bg-gradient-to-r from-primary-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 animate-pulse flex items-end justify-center">
    <div class="mb-8 text-3xl font-bold text-primary-300 dark:text-primary-700">
      Loading chart...
    </div>
  </div>
{/if}