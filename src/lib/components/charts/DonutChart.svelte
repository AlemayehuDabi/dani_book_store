<script lang="ts">
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';

  export let labels: string[] = [];
  export let series: number[] = [];

  let ApexChart: any = null;

  onMount(async () => {
    if (browser) {
      const module = await import('svelte-apexcharts');
      ApexChart = module.default;
    }
  });

  $: options = {
    labels,
    chart: {
      type: 'donut',
      toolbar: { show: false },
      fontFamily: 'Inter, sans-serif'
    },
    dataLabels: { enabled: false },
    legend: {
      position: 'bottom' as const  // ← FIXED: removed the extra { }
    },
    stroke: {
      width: 0
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              fontSize: '22px',
              fontWeight: 600,
              color: '#2c1e1a'
            }
          }
        }
      }
    },
    colors: ['#b87580', '#cf9aa3', '#eddbdf', '#e0c2c8', '#6b5851'],
    responsive: [
      {
        breakpoint: 640,
        options: {
          legend: { position: 'bottom' }
        }
      }
    ]
  };
</script>

{#if browser && ApexChart}
  <ApexChart type="donut" {series} {options} height={280} />
{:else}
  <div class="flex flex-col items-center justify-center h-[280px] rounded-2xl bg-gradient-to-br from-primary-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
    <div class="w-32 h-32 border-8 border-primary-200 dark:border-primary-800 border-t-primary-500 dark:border-t-primary-400 rounded-full animate-spin"></div>
    <p class="mt-6 text-sm font-medium text-primary-600 dark:text-primary-400">Loading chart...</p>
  </div>
{/if}