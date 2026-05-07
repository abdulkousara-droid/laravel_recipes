export default function RecipeFeatures({recipe, flags}: {recipe: any, flags: any}) {
    return (
        <div className="recipe-features mb-3 d-flex flex-wrap gap-1">
            {Object.entries(flags).map(
                ([columnName, flagDetails]: [string, any]) => {
                    if (recipe[columnName]) {
                        return (
                            <span
                                key={columnName}
                                className={`badge ${flagDetails.cssClass}`}
                            >
                                <i
                                    className={`fas ${flagDetails.icon} me-1`}
                                ></i>
                                {flagDetails.title}
                            </span>
                        );
                    }

                    return null;
                },
            )}
        </div>
    );
}
