import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

type AccordionProps = {
    items: { label: string; content: string }[];
    single?: boolean;
};

export function Accordion({ items, single = false }: AccordionProps) {
    const [openedSections, setOpenedSections] = useState(new Set());

    const toggle = (idx: number) => {
        if (!single) {
            if (openedSections.has(idx)) {
                setOpenedSections(
                    new Set([...openedSections].filter((item) => item !== idx))
                );
                return;
            }
            setOpenedSections(new Set(openedSections.add(idx)));
            return;
        }
    };

    return (
        <div className="flex flex-col gap-2">
            <div className="font-bold text-2xl">Frequently Asked Questions</div>

            {items.map(({ label, content }, idx) => {
                const isExpanded = openedSections.has(idx);
                return (
                    <div
                        className="flex flex-col gap-[1px]"
                        key={label}
                    >
                        <div
                            key={label}
                            className="p-7 bg-slate-300 text-lg sm:text-2xl flex flex-row justify-between cursor-pointer"
                            onClick={() => toggle(idx)}
                        >
                            {label}
                            <IoIosArrowForward
                                size={40}
                                className={`${
                                    isExpanded ? "rotate-90" : "rotate-0"
                                } transition-transform duration-200 ease-out`}
                            />
                        </div>

                        <div
                            className={`bg-slate-300 text-lg sm:text-2xl  px-5 ${
                                isExpanded ? "max-h-[500px] p-5" : "h-0 p-0"
                            } transition-all duration-100 ease-in-out overflow-hidden `}
                        >
                            {content}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
