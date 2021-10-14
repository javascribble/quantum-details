export default `
<style>
    summary {
        cursor: pointer;
        transition: color 0s;
        letter-spacing: var(--letter-spacing);
        text-transform: uppercase;
        font-weight: bold;
        outline: none;
    }

        summary:hover {
            color: var(--primary-hover-color);
        }

        summary:active {
            color: var(--primary-active-color);
        }

    details {
        
    }
</style>
`;