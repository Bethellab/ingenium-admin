import { useRef, useState, Fragment, useEffect } from "react";
import { Menu } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { RenderIf } from "@/components/hoc";
import { Button } from "../Button/Button";
import { Checkbox } from "../Checkbox/Checkbox";

interface Option {
  label: string;
  value: string | number;
  disabled?: boolean;
  image?: any; // Optional image for single select
}

interface DropdownProps {
  label?: string;
  search?: boolean;
  placeholder?: string;
  showButton?: boolean;
  containerVariant?: string;
  searchPlaceholder?: string;
  selectInput?: boolean;
  multiple?: boolean;
  options: Option[];
  // eslint-disable-next-line no-unused-vars
  onSelect: (option: Option | Option[]) => void;
  maxSelection?: number;
  disabled?: boolean;
  selected?: string;
  fixedOptions?: Option[];
  optional?: boolean;
  help?: string;
  error?: string | boolean;
  defaultOption?: Option[];
  enableSearchOptions?: boolean;
  loading?: boolean;
  clearSelected?: boolean;
  wrapperClassName?: string;
  optionsClassName?: string;
  count?: boolean; // display first option and count of others
  labelClassName?: string;
}

export const Dropdown = ({
  label,
  placeholder = "Select",
  options,
  selected,
  loading,
  showButton = false,
  containerVariant,
  onSelect,
  multiple = false,
  // selectInput = false,
  search = true,
  maxSelection = Infinity,
  // searchPlaceholder,
  disabled,
  optional,
  fixedOptions, // an array of options that aren't editable(removed or added)
  defaultOption = [],
  enableSearchOptions,
  clearSelected,
  wrapperClassName = "",
  optionsClassName = "",
  count = false,
  labelClassName,
  ...props
}: DropdownProps) => {
  const ref = useRef<HTMLButtonElement>(null);

  const [selectedOptions, setSelectedOptions] =
    useState<Option[]>(defaultOption);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const filteredOptions = options?.filter((option) =>
    option?.label?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  );

  const isFixedOption = (option: Option) => {
    return fixedOptions?.some(
      (selectedOption) => selectedOption.value === option.value
    );
  };

  const isSelected = (option: Option) => {
    return selectedOptions.some(
      (selectedOption) => selectedOption.value === option.value
    );
  };
  const allOptions = selectedOptions.filter(
    (item: Option) => item.label !== "All"
  );
  const allOptionIsSelected = selectedOptions.some(
    (item: Option) => item.label === "All"
  );
  const displayOptions = showButton ? defaultOption : allOptions;

  const handleSelect = (option: Option) => {
    if (multiple) {
      const selectedOptionsArray = [...selectedOptions];

      if (option.label === "All") {
        setSelectedOptions(allOptionIsSelected ? [] : options);
        if (showButton) {
          onSelect([]);
        } else {
          const opts = options.filter((item: Option) => item.label !== "All");
          onSelect(allOptionIsSelected ? [] : opts);
        }
        return;
      }

      const isSelected = selectedOptions.some(
        (item: Option) => item.label === option.label
      );

      let result;

      if (isSelected) {
        result = selectedOptionsArray.filter(
          (item: Option) => item.label !== option.label && item.label !== "All"
        );
      } else {
        result = [...selectedOptionsArray, option];
        /**
         * this is wrong because there is an assumption that there will be an "all" option in the options and that is not always the case
         * the solution adopted is to use the allOptions length that excludes the all from the options list.
         */
        if (!allOptionIsSelected && result.length === allOptions.length - 1) {
          result = options;
        }
      }
      setSelectedOptions(result);
      onSelect(
        showButton ? [] : result.filter((item: Option) => item.label !== "All")
      );
    } else {
      setSelectedOptions([option]);
      onSelect(option);
    }
  };

  const handleRemoveOption = (option: Option, e: any) => {
    e.preventDefault();
    const updatedOptions = allOptions.filter(
      (selectedOption) => selectedOption.value !== option.value
    );
    setSelectedOptions(updatedOptions);
    onSelect(updatedOptions);
  };

  useEffect(() => {
    if (clearSelected) {
      setSelectedOptions(defaultOption || []);
    }
  }, [clearSelected]);

  /* this is to ensure that the data in the setSelectedOption in the situation
    where there are default options is retained, if the data is still
    being loaded for instance.
  */
  useEffect(() => {
    if (defaultOption.length > 0) {
      setSelectedOptions(defaultOption);
    }
  }, [defaultOption]);

  return (
    <div className={`flex flex-col gap-2 mb-[16px] ${wrapperClassName}`}>
      {label && (
        <div className="text-sm flex items-center">
          <span className={`${labelClassName} text-headers font-medium`}>
            {label}
          </span>
          {optional && (
            <span className="font-normal text-[#A2AAA9] ml-1">(Optional)</span>
          )}
        </div>
      )}

      <Menu as="div" className="w-full relative inline-block text-left">
        <Menu.Button
          ref={ref}
          disabled={disabled}
          data-testid="dropdownList"
          className={`${containerVariant} inline-flex justify-between items-center
          w-full px-4 py-3 bg-white border border-grey-200 rounded-md shadow-sm
          focus:border-primary-200 disabled:bg-neutral-5 disabled:border-neutral-10
          disabled:text-neutral-30 caret-primary-base transition-all duration-300 ease-out`}
        >
          {/* Multiple Option */}
          <RenderIf condition={multiple}>
            {!count && (
              <>
                {displayOptions.length > 0 ? (
                  <div className="flex flex-wrap gap-2 items-center">
                    {displayOptions?.map((option) => (
                      <div
                        key={option?.value}
                        className="flex items-center px-2 bg-neutral-5 min-w-fit h-8"
                      >
                        <span className="mr-1 text-xs font-medium text-neutral-base tracking-thin">
                          {option?.label}
                        </span>
                        <div
                          role="button"
                          onClick={(e) =>
                            isFixedOption(option)
                              ? null
                              : handleRemoveOption(option, e)
                          }
                          data-testid="remove-icon"
                        >
                          <Icon
                            icon="ph:x"
                            className="text-sm text-neutral-base"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-base text-neutral-base">
                    {placeholder}
                  </div>
                )}
              </>
            )}
            {count && (
              <p>
                {displayOptions[0]?.label || placeholder}{" "}
                {displayOptions?.length > 1 && (
                  <>+{displayOptions?.length - 1}</>
                )}
              </p>
            )}
          </RenderIf>

          {/* Single option */}
          <RenderIf condition={!multiple}>
            {selectedOptions.length > 0 ? (
              selectedOptions?.map((option) => (
                <div
                  className="flex items-center gap-2 text-sm text-neutral-base"
                  key={option?.value}
                >
                  {option.image && (
                    <img
                      className="h-[24px] w-[24px] object-contain"
                      src={option.image}
                      alt="option-icon"
                    />
                  )}
                  <span className="capitalize-first">{option.label}</span>
                </div>
              ))
            ) : (
              <div className="text-sm text-neutral-base capitalize-first">
                {selected || placeholder}
              </div>
            )}
          </RenderIf>

          <Icon icon="ph:caret-down" className="text-label ml-2 h-3 w-3" />
        </Menu.Button>

        <Menu.Items
          className={`min-w-max ${
            multiple && options?.length > 7 ? "lg:min-w-max" : "lg:min-w-full"
          } overflow-hidden absolute
          z-[1000] p-3 left-0 mt-2 origin-top-right rounded-md bg-white shadow-md focus:outline-none`}
        >
          <RenderIf condition={search}>
            <div className="tracking-custom mb-2 flex items-center">
              {/* <span className="text-neutral-80 text-sm font-medium">
                { searchPlaceholder ?? "Search"}
              </span> */}
              {maxSelection !== Infinity && (
                <span className="text-neutral-base font-normal ml-1">
                  (You can select up to {maxSelection})
                </span>
              )}
            </div>

            {enableSearchOptions && (
              <div className="relative w-full h-fit">
                <Icon
                  icon="ph:magnifying-glass"
                  className="h-5 w-5 left-4 text-neutral-20 mt-3.5 inset-x-0 absolute z-10"
                />
                <input
                  type="text"
                  value={searchTerm}
                  data-testid="search-option"
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search"
                  className="rounded-lg w-full text-sm flex py-3 pr-[4px] pl-10 border border-neutral-10 bg-neutral-variant
                text-neutral-80 disabled:bg-neutral-3 disabled:border-neutral-10 disabled:text-neutral-30
                transition-all duration-300 ease-out placeholder:text-neutral-30 placeholder:font-normal focus:outline-none"
                  onKeyDown={(e) => {
                    if (e.key === " ") {
                      e.stopPropagation();
                    }
                  }}
                />
              </div>
            )}
          </RenderIf>

          <div
            className={`grid grid-cols-1 mt-1 w-full overflow-scroll max-h-40 ${optionsClassName} ${
              multiple && options?.length > 7
                ? "lg:grid-cols-2"
                : "lg:grid-cols-1"
            }`}
          >
            {filteredOptions?.map((option) => (
              <Menu.Item
                key={option.value}
                as={Fragment}
                disabled={isFixedOption(option)}
              >
                {({ active }) =>
                  multiple ? (
                    <Checkbox
                      key={option.label.toLowerCase()}
                      label={option.label}
                      id={option.label}
                      checked={isSelected(option)}
                      disabled={
                        multiple &&
                        selectedOptions.length >= maxSelection &&
                        !isSelected(option)
                      }
                      className="border-neutral-30 relative cursor-pointer select-none rounded-lg p-3 !text-neutral-base"
                      onChange={() => handleSelect(option)}
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={(e) => {
                        handleSelect(option);
                        if (multiple) {
                          e.preventDefault();
                          e.stopPropagation();
                        }
                      }}
                      disabled={
                        (multiple &&
                          selectedOptions.length >= maxSelection &&
                          !isSelected(option)) ||
                        option?.disabled
                      }
                      className={`${active ? "bg-gray-100" : ""} ${
                        option?.disabled ? "cursor-not-allowed" : ""
                      } group flex items-center w-full p-3 gap-3 text-neutral-base text-base rounded-md`}
                    >
                      {multiple && (
                        <input
                          type="checkbox"
                          checked={isSelected(option)}
                          disabled={
                            multiple &&
                            selectedOptions.length >= maxSelection &&
                            !isSelected(option)
                          }
                          className="h-6 w-6 border-neutral-30 bg-white focus:outline-none"
                          readOnly
                        />
                      )}
                      {option.image && (
                        <img
                          className="h-[24px] w-[24px] object-contain"
                          src={option.image}
                          alt="option-icon"
                        />
                      )}
                      {/* {option.label && <div className="text-left line-clamp-1">{option.label}</div>} */}
                      {option.label && (
                        <div className="text-left">{option.label}</div>
                      )}
                    </button>
                  )
                }
              </Menu.Item>
            ))}
            {loading && !filteredOptions?.length && (
              <p className="font-inter text-center text-body py-[20px]">
                Loading Data...
              </p>
            )}
            {!loading && !filteredOptions?.length && (
              <p className="font-inter text-center text-body py-[20px]">
                No data found
              </p>
            )}
          </div>

          <RenderIf condition={filteredOptions?.length > 0 && showButton}>
            <Menu.Item>
              {({ close }) => (
                <div className="mt-3 w-full grid grid-cols-2 items-center gap-3">
                  <Button
                    type="button"
                    theme="primary"
                    size="40"
                    onClick={() => {
                      onSelect(
                        allOptionIsSelected ? allOptions : selectedOptions
                      );
                      close();
                    }}
                    className="w-full"
                  >
                    Apply
                  </Button>
                  <Button
                    type="button"
                    theme="transparent"
                    size="40"
                    onClick={() => {
                      setSelectedOptions([]);
                      onSelect([]);
                    }}
                    className="w-full"
                  >
                    Clear All
                  </Button>
                </div>
              )}
            </Menu.Item>
          </RenderIf>
        </Menu.Items>
      </Menu>

      <RenderIf condition={!!props?.help}>
        <div className="flex items-center gap-1 text-sm text-neutral-base">
          <Icon icon="ph:info" className="text-lg" />
          <span>{props?.help}</span>
        </div>
      </RenderIf>
      <RenderIf condition={!!props?.error}>
        <span className="text-error font-normal text-xs">{props?.error}</span>
      </RenderIf>
    </div>
  );
};
