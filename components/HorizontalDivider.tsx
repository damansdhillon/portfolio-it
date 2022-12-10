export const HorizontalDivider = (props: HorizontalDividerProps) => {
  return (
    <>
      <div
        className={`${props.classes} flex h-px bg-gray-700 dark:bg-gray-800`}
      ></div>
    </>
  );
};

type HorizontalDividerProps = {
  classes?: string;
};
