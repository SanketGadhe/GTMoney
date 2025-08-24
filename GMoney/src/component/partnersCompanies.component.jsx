import React from 'react'

const PartnerCompany = (partners) => {
    console.log(partners);
    return (
        <div className="flex flex-wrap justify-center items-center gap-6 mb-7">
            {partners.partners.map((partner, index) => (
                <React.Fragment key={partner.name}>

                    <div className="flex items-center space-x-2">
                        <img
                            src={partner.logo}
                            alt={partner.name}
                            className="h-12 md:h-16 object-contain"
                        />
                    </div>
                    {/* Divider except last */}
                    {index !== partners.length - 1 && (
                        <span className="text-gray-300 font-light  text-6xl">|</span>
                    )}
                </React.Fragment>
            ))}
        </div>
    )
}

export default PartnerCompany
