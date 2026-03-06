//Creacion de componente input

export default function Input({ label, type = "text", ...props }) {
  return (
    <div className="w-[320px]">
      {/*label */}
      {label && (
        <label
          //   className="block text-[8px]
          //                       mb-1
          //                       text-gray-600"
          // >
          className="block
                    mb-1
                    text-label
                    font-body
                    font-heading
                    text-mostsmall
                    
                    "
        >
          {label}
        </label>
      )}

      {/*Contenerdor del input */}

      <div
        className="
      relative
      h-12
      flex
      items-center
      "
      >
        {/* Area interactiva invisible (48px) */}
        <div
          className="
          absolute
          inset-0
          "
          onMouseDown={(e) => {
            e.preventDefault();
            e.currentTarget.nextSibling.focus();
          }}
        />

        {/* Input visual*/}

        <input
          type={type}
          // className="
          // relative
          //  w-full
          //  h-10
          //  rounded-md
          //  border
          //  border-gray-300
          //  px-4
          //  text-base

          //  focus:outline-none
          //  focus:ring-2
          //  focus:ring-blue-500
          //  focus:border-blue-500
          //  "
          // {...props}
          className="
          relative
          w-full
          h-10
          rounded-md
          border        
      
          px-4
          text-label
          font-body
          font-heading
          text-small

          
          placeholder:-color-border
          placeholder:-color-border
          placeholder:text-small
          placeholder:font-body
          placeholder:text-font-heading



          focus:outline-none
          focus:ring-1

          focus:ring-color-border
          focus:border-border
          
          "
          {...props}
        />
      </div>
    </div>
  );
}
