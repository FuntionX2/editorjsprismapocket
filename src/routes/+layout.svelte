<script>
    export let data;
</script>
{#if data.user}
    <p>LOGGED IN</p>
    <form action="/api/logout" method="POST">
    <button>Logout</button></form>
{/if}
<slot></slot>