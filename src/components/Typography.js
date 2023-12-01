export default function Typography({
  children,
  type,
  style,
  color = "text-darkText",
  ...rest
}) {
  if (type === "h6") {
    return (
      <div {...rest} className={`${style} ${color} text-h6`}>
        {children}
      </div>
    );
  }
  if (type === "sub_bold") {
    return (
      <div
        {...rest}
        className={`${style}  ${color} sm:text-[18px] text-[14px]  font-bold leading-[27px] `}
      >
        {children}
      </div>
    );
  }
  if (type === "sub1") {
    return (
      <div {...rest} className={`${style}  ${color} text-sub1 `}>
        {children}
      </div>
    );
  }
  if (type === "sub2") {
    return (
      <div {...rest} className={`${style}  ${color} text-sub2 `}>
        {children}
      </div>
    );
  }
  if (type === "body1") {
    return (
      <div {...rest} className={`${style}  ${color} sm:text-body1  text-body2`}>
        {children}
      </div>
    );
  }
  if (type === "body2") {
    return (
      <p {...rest} className={`${style}  ${color} text-body2 `}>
        {children}
      </p>
    );
  }
}
