export default function Select({
    label,
    name,
    options = []
}
    


){
     

    return(
        <div className="w-[320px]">
            {/* label si el label tiene contenido que es igual a truty, si no es falsy y no muesta el label */}
            {label &&(
                <label className="text-mostsmall mb-1 text-text-muted">
                {label}
                </label>
            )
                
            };

            
            
            
            
            <select name={name} 
                    className="
                    w-full
                    h-12
                    rounded-md
                    border
                    border-border
                    px-4">
                <option value="Selecione un tipo de documento"></option>
                {options.map((option) => (
                    <options key={option.id} value={option.value}>
                        {option.label}
                    </options>
                ))
                };
                
            
            </select>
            
        </div>

    );
};