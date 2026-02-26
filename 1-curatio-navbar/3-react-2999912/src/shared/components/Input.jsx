// Creación de componente input

export default function Input({label, type = "text", ...props}){
    return (
      <div className="w-[320px]">
        {/* Label */}
        {label && (
          <label
            className="
                block
                text-[8px]
                mb-1
                text-text-primary
                px-
                "
          >
            {label}
          </label>
        )}

        {/* Contenedor del input */}
        <div
          className="
          relative
          h-12
          flex
          items-center
          "
        >
          {/* Área interactiva invisible (48px) */}
          <div
            className="
             absolute
             inset-0
             "
            onMouseDown = {(e) => {
              e.preventDefault();
              e.currentTarget.nextSibling.focus();
              }}
            
          />
          {/* Input visual */}
          <input
            type={type}
            className="
            relative
            w-full
            h-12
            rounded-md
            border
            border-border-strong
            px-4
            text-h2

            focus:outline-none
            focus:ring-1
            focus:ring-focus-ring
            focus:border-focus-border
            "
            {...props}
          />
        </div>
      </div>
    );
}