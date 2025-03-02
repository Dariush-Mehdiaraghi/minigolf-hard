<script lang="ts">


    export let onHoleSelected: (holeId: string) => void;
    export let gameState: GameState;

    function handleHoleClick(holeId: string) {
        onHoleSelected(holeId);
    }

    function getHoleColor(holeId: string): string {
        const holeState = gameState.holesState.find(h => h.holeId === holeId);
        if (!holeState?.scores || holeState.scores.length === 0 || holeState.scores.every(score => score.attempts === 0)) {
            return 'black';
        }
        return '#EA9AC3'; // completed holes are pink
    }
</script>

<svg id="map" width="100%" viewBox="0 0 346 1191" xmlns="http://www.w3.org/2000/svg" style="pointer-events: {gameState.isFinished || gameState.users.length === 0 ? 'none' : 'auto'}">
    <g id="L_Group" on:click={() => handleHoleClick('L')}>
        <rect class="bg-shape" style="fill: {getHoleColor('L')}" id="Rectangle 46" x="242.777" y="1.52588e-05" width="101.735" height="222.545" rx="50.8674"/>
        <rect class="bg-shape" style="fill: {getHoleColor('L')}" id="Rectangle 52" x="344.511" y="1.52588e-05" width="101.735" height="222.545" rx="50.8674" transform="rotate(90 344.511 1.52588e-05)"/>
        <path class="letter" id="L" d="M172.028 28.0286V66.3064H194.601V72.5376H164.398V28.0286H172.028Z"/>
    </g>
    <g id="J_Group" on:click={() => handleHoleClick('J')}>
        <rect class="bg-shape" style="fill: {getHoleColor('J')}" id="Rectangle 51" x="118.787" y="243.605" width="101.735" height="222.545" rx="50.8674"/>
        <path class="letter" id="J" d="M172.915 274.813H180.482V313.408C180.482 316.842 178.256 319.322 174.568 319.322H160.198V313.09H171.071C172.279 313.09 172.915 312.582 172.915 311.183V274.813Z"/>
    </g>
    <g id="M_Group" on:click={() => handleHoleClick('M')}>
        <rect class="bg-shape" style="fill: {getHoleColor('M')}" id="Rectangle 51_2" x="0.632553" y="0.27475" width="101.735" height="222.545" rx="50.8674"/>
        <path class="letter" id="M" d="M63.7072 31.4826H75.216V75.9916H67.713L67.7766 40.1936H67.6495L55.6956 75.9916H48.3834L36.4296 40.1936H36.3024L36.366 75.9916H28.9266V31.4826H40.3718L52.0077 67.217H52.1349L63.7072 31.4826Z"/>
    </g>
    <g id="K_Group" on:click={() => handleHoleClick('K')}>
        <rect class="bg-shape" style="fill: {getHoleColor('K')}" id="Rectangle 47" x="242.777" y="242.666" width="101.735" height="222.545" rx="50.8674"/>
        <path class="letter" id="K" d="M295.969 294.62L314.853 320.562H305.507L290.691 299.834L285.478 305.111V320.562H277.847V276.053H285.478V295.892L304.171 276.053H314.154L295.969 294.62Z"/>
    </g>
    <g id="I_Group" on:click={() => handleHoleClick('I')}>
        <rect class="bg-shape" style="fill: {getHoleColor('I')}" id="Rectangle 54" x="223.701" y="484.518" width="101.735" height="222.545" rx="50.8674" transform="rotate(90 223.701 484.518)"/>
        <path class="letter" id="I" d="M175.102 512.547V557.056H167.472V512.547H175.102Z"/>
    </g>
    <g id="H_Group" on:click={() => handleHoleClick('H')}>
        <rect class="bg-shape" style="fill: {getHoleColor('H')}" id="Rectangle 48" x="242.777" y="484.286" width="101.735" height="222.545" rx="50.8674"/>
        <path class="letter" id="H" d="M302.939 515.493H310.569V560.002H302.939V539.465H282.91V560.002H275.279V515.493H282.91V533.233H302.939V515.493Z"/>
    </g>
    <g id="A_Group" on:click={() => handleHoleClick('A')}>
        <rect class="bg-shape" style="fill: {getHoleColor('A')}" id="Rectangle 57" x="102.367" y="948.452" width="101.735" height="222.545" rx="50.8674" transform="rotate(-180 102.367 948.452)"/>
        <path class="letter" id="A" d="M65.632 804.803L61.1175 792.086H43.4411L38.863 804.803H30.6606L48.2099 760.294H56.2851L73.7708 804.803H65.632ZM45.5394 786.046H58.8921L52.3429 768.306H52.2157L45.5394 786.046Z"/>
    </g>
    <g id="B_Group" on:click={() => handleHoleClick('B')}>
        <rect class="bg-shape" style="fill: {getHoleColor('B')}" id="Rectangle 56" x="224.367" y="948.452" width="101.735" height="222.545" rx="50.8674" transform="rotate(-180 224.367 948.452)"/>
        <path class="letter" id="B" d="M180.819 781.595C186.859 781.531 191.183 785.982 191.183 792.468C191.183 800.034 186.033 804.803 177.385 804.803H155.639V760.294H174.842C183.807 760.294 188.64 764.809 188.64 771.421C188.64 776.89 185.524 780.259 180.819 781.468V781.595ZM163.269 798.572H175.796C181.391 798.572 183.553 796.346 183.553 791.705C183.553 786.809 180.374 784.71 175.732 784.71H163.269V798.572ZM163.269 778.733H173.952C178.466 778.733 181.009 776.381 181.009 772.311C181.009 768.433 178.657 766.462 174.015 766.462H163.269V778.733Z"/>
    </g>
    <g id="D_Group" on:click={() => handleHoleClick('D')}>
        <rect class="bg-shape" style="fill: {getHoleColor('D')}" id="Rectangle 55" x="223.701" y="967.526" width="101.735" height="222.545" rx="50.8674" transform="rotate(90 223.701 967.526)"/>
        <path class="letter" id="D" d="M185.847 1017.81C185.847 1031.8 178.026 1040.06 164.991 1040.06H148.714V995.555H165.055C177.581 995.555 185.847 1003.31 185.847 1017.81ZM156.344 1033.83H164.037C173.702 1033.83 178.217 1028.68 178.217 1017.81C178.217 1007.13 173.829 1001.72 164.101 1001.72H156.344V1033.83Z"/>
    </g>
    <g id="F_Group" on:click={() => handleHoleClick('F')}>
        <rect class="bg-shape" style="fill: {getHoleColor('F')}" id="Rectangle 50" x="242.777" y="967.526" width="101.735" height="222.545" rx="50.8674"/>
        <path class="letter" id="F" d="M308.293 1008.08H285.72V1019.65H303.206V1025.88H285.72V1046.42H278.09V1001.91H308.293V1008.08Z"/>
    </g>
    <g id="E_Group" on:click={() => handleHoleClick('E')}>
        <rect class="bg-shape" style="fill: {getHoleColor('E')}" id="Rectangle 58" x="223.701" y="1088.34" width="101.735" height="222.545" rx="50.8674" transform="rotate(90 223.701 1088.34)"/>
        <path class="letter" id="E" d="M181.762 1122.53H159.19V1134.11H176.676V1140.34H159.19V1154.64H181.762V1160.87H151.56V1116.37H181.762V1122.53Z"/>
    </g>
    <g id="G_Group" on:click={() => handleHoleClick('G')}>
        <rect class="bg-shape" style="fill: {getHoleColor('G')}" id="Rectangle 49" x="243.633" y="725.907" width="101.735" height="222.545" rx="50.8674"/>
        <path class="letter" id="G" d="M293.158 788.017V782.167H314.205V804.803H308.927L307.592 796.855H307.465C306.002 800.225 300.915 805.439 293.158 805.439C281.077 805.439 272.366 796.664 272.366 782.676C272.366 768.56 281.077 759.658 293.794 759.658C304.985 759.658 312.233 765.953 314.268 773.583L306.002 775.936C304.794 770.213 301.17 765.826 293.73 765.826C285.21 765.826 280.378 772.121 280.378 782.485C280.378 793.04 285.465 799.207 293.667 799.207C300.47 799.207 306.129 794.947 307.147 788.017H293.158Z"/>
    </g>
</svg>

<style lang="scss">
    #map {
        fill: none;
        max-width: 500px;
        cursor: pointer;
    }

    g {
        transition: fill 0.3s ease;
        
        &:hover {
            opacity: 0.8;
        }
    }

    .letter {
        fill: white;
        pointer-events: none;
    }

    .letter-dark {
        fill: black;
        pointer-events: none;
    }
</style> 