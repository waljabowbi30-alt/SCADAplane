import { useRef, useState } from "react";
// plane constants
import { SCADA_TEMPLATES, IProjectTemplate } from "@plane/constants";
// plane ui
import { Button } from "@plane/ui";
import { Popover } from "@headlessui/react";

export type TProjectTemplateSelect = {
  disabled?: boolean;
  onSelect?: (template: IProjectTemplate) => void;
};

export function ProjectTemplateSelect(props: TProjectTemplateSelect) {
  const { disabled, onSelect } = props;
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            ref={buttonRef}
            disabled={disabled}
            className={`flex items-center gap-2 rounded-md border border-custom-border-200 bg-custom-background-100 px-3 py-1.5 text-xs font-medium text-custom-text-200 hover:text-custom-text-100 ${
              disabled ? "cursor-not-allowed opacity-60" : "hover:bg-custom-background-80"
            }`}
          >
            <span>SCADA Templates</span>
          </Popover.Button>

          <Popover.Panel className="absolute left-0 top-10 z-20 w-80 overflow-hidden rounded-md border border-custom-border-200 bg-custom-background-100 shadow-lg">
            <div className="p-2">
              <div className="mb-2 px-2 text-xs font-semibold text-custom-text-200">
                Select a Template to pre-fill project details
              </div>
              <div className="flex flex-col gap-1">
                {SCADA_TEMPLATES.map((template) => (
                  <button
                    key={template.key}
                    type="button"
                    onClick={() => {
                      if (onSelect) onSelect(template);
                      buttonRef.current?.click(); // Close popover
                    }}
                    className="flex flex-col items-start gap-1 rounded p-2 text-left hover:bg-custom-background-80"
                  >
                    <span className="text-sm font-medium text-custom-text-100">{template.name}</span>
                    <span className="text-xs text-custom-text-200 line-clamp-2">{template.description}</span>
                  </button>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
