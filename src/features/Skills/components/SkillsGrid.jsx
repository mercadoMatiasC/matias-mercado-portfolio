import { Tile } from "./Tile"

export function SkillsGrid({ counter, setCounter }) {
    const base_class = "grid auto-rows-[7vh] w-full gap-3 grid-cols-6 md:auto-rows-[130px] md:w-full md:grid-cols-10";

    return (
        <main className="flex flex-col w-full justify-center items-center py-2 2xl:py-8">
            {/* What if I lit all the tiles up? */}
            <div className={base_class}>
                {/* ROW 1 AND 2 */}
                <Tile x={2} y={2} counter={counter} setCounter={setCounter} colour="magenta" title="Laravel" src="/brand/svgs/skills/Laravel.svg" alt="Laravel" />
                <Tile x={2} y={2} counter={counter} setCounter={setCounter} colour="magenta" title="React.js" src="/brand/svgs/skills/React.svg" alt="React.js" />
                <Tile x={2} y={2} counter={counter} setCounter={setCounter} colour="magenta" title="MySQL" src="/brand/svgs/skills/MySQL.svg" alt="MySQL" />
                <Tile x={2} y={1} counter={counter} setCounter={setCounter} title="CSS" src="/brand/svgs/skills/CSS3.svg" alt="CSS3" />
                <Tile x={2} y={1} counter={counter} setCounter={setCounter} title="PHP" src="/brand/svgs/skills/PHP.svg" alt="PHP" />
                <Tile x={1} y={1} counter={counter} setCounter={setCounter} title="Bootstrap" src="/brand/svgs/skills/Bootstrap.svg" alt="Bootstrap" />
                <Tile x={1} y={1} counter={counter} setCounter={setCounter} title="Tailwind" src="/brand/svgs/skills/Tailwind.svg"  alt="Tailwind" />
                <Tile x={2} y={1} counter={counter} setCounter={setCounter} title="HTML" src="/brand/svgs/skills/HTML5.svg"  alt="HTML5" />

                {/* ROW 3 */}
                <Tile x={1} y={1} counter={counter} setCounter={setCounter} title="Blade" src="/brand/svgs/skills/Blade.svg" alt="Blade" />
                <Tile x={2} y={1} counter={counter} setCounter={setCounter} title="JavaScript" src="/brand/svgs/skills/JavaScript.svg" alt="JS"/>
                <Tile x={1} y={1} counter={counter} setCounter={setCounter} title="Vite.js" src="/brand/svgs/skills/Vite.js.svg" alt="Vite" />
                <Tile x={2} y={1} counter={counter} setCounter={setCounter} title="Rest API" src="/brand/svgs/skills/Rest-API.svg" alt="Rest API" />
                <Tile x={1} y={1} counter={counter} setCounter={setCounter} title="Postman" src="/brand/svgs/skills/Postman.svg" alt="Postman" />
                <Tile x={1} y={1} counter={counter} setCounter={setCounter} title="Git" src="/brand/svgs/skills/Git.svg" alt="Git" />
                <Tile x={1} y={1} counter={counter} setCounter={setCounter} title="GitHub" src="/brand/svgs/skills/GitHub.svg" alt="GitHub" />
                <Tile x={1} y={1} counter={counter} setCounter={setCounter} title="Apache" src="/brand/svgs/skills/Apache.svg" alt="Apache" hideOnMobile={true} />
            </div>

            <div className={`${base_class} mt-10`}>
                {/* ROW 4 */}
                <Tile x={2} y={1} counter={counter} setCounter={setCounter} colour="gold" title="Office" src="/brand/svgs/skills/Office.svg" alt="Office" />
                <Tile x={2} y={1} counter={counter} setCounter={setCounter} colour="gold" title="Unity" src="/brand/svgs/skills/Unity.svg" alt="Unity"/>
                <Tile x={2} y={1} counter={counter} setCounter={setCounter} colour="gold" title="Photoshop" src="/brand/svgs/skills/Photoshop.svg" alt="Photoshop" />
                <Tile x={2} y={1} counter={counter} setCounter={setCounter} colour="gold" title="Blender" src="/brand/svgs/skills/Blender.svg" alt="Blender" />
                <Tile x={2} y={1} counter={counter} setCounter={setCounter} colour="gold" title="Sony Vegas" src="/brand/svgs/skills/SonyVegas.svg" alt="Sony Vegas" />
            </div>
        </main>
    );
}