import React, { ReactNode } from "react";

interface MayorProps {
    name: string;
    perks?: {
        description: ReactNode;
        name: string
}[];
}

export default function MayorBox({name, perks}: MayorProps) {
    return (
        <div className="mt-20 mx-auto border-4 border-stone-600 rounded-lg border-double shadow-2xl w-full sm:w-[50ch] justify-center">
            <h2 className="text-3xl underline font-semibold">Mayor:</h2>
            <h3 className="text-2xl">{name}</h3>
            <h2 className="text-3xl underline font-semibold">Perks:</h2>
            <ol>
                {perks && perks.map((perk, index) => (
                    <li key={index}>
                        {index + 1}. {perk.name}

                        <p className="max-w-[50ch] text-center" style={{textAlign: 'center'}}>
                            {String(perk.description).replace(/§(.)/g, "")}
                        </p>
                    </li>
                ))}
            </ol>
        </div>
    )
}