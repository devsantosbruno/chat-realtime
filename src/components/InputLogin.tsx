interface InputProps {
  labelTitle: string;
  typeField: string;
  setState?: any;
  icon: any;
}

export function InputLogin(props: InputProps) {
  return (
    <label
      htmlFor={props.labelTitle}
      className="bg-[#323644] rounded-xl flex flex-col justify-center pl-5 pr-10 py-2 relative"
    >
      <label
        htmlFor={props.labelTitle}
        className="text-[11px] text-[#9c9da2] text-start"
      >
        {props.labelTitle}
      </label>

      <input
        className="text-white text-sm bg-transparent border-none outline-none"
        type={props.typeField}
        id={props.labelTitle}
        onChange={
          props.setState
            ? (event) => props.setState(event.target.value)
            : undefined
        }
        autoComplete="off"
        required
      />

      <div className="absolute right-3">{props.icon}</div>
    </label>
  );
}
