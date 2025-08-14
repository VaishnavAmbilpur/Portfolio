import React from 'react'

const ProjectHolder = ({ title, description, imageUrl, tags, LiveUrl, codeUrl }) => {
  return (
    <div className="bg-zinc-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col h-full w-full max-w-xs">
      {/* Project Image - Smaller */}
      <div className="h-36 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Project Content - More compact */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-1 text-white">{title}</h3>
        <p className="text-white text-sm mb-3 line-clamp-2">{description}</p>
        
        {/* Tags - Smaller */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-0.5 bg-gray-100 text-zinc-900 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links - Smaller buttons */}
        <div className="flex flex-row space-x-2 mt-auto">
          {LiveUrl && (
            <a
              href={LiveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-blue-zinc hover:bg-zinc-700 text-white text-sm rounded-md transition-colors"
            >
              Demo
            </a>
          )}  
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border  hover:bg-zinc-700 text-white-700 text-sm rounded-md transition-colors"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectHolder