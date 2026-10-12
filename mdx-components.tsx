import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2 className="display mt-12 text-[24px] tracking-[-0.02em]">
        {children}
      </h2>
    ),
    p: ({ children }) => (
      <p className="mt-5 text-[16px] leading-[1.75] text-[#4a463c]">
        {children}
      </p>
    ),
    a: ({ href, children, ...props }) => {
      const external = href?.startsWith('http')
      return (
        <a
          href={href}
          {...(external ? { rel: 'noopener' } : {})}
          className="text-cobalt underline decoration-1 underline-offset-4"
          {...props}
        >
          {children}
        </a>
      )
    },
    blockquote: ({ children }) => (
      <blockquote className="mt-8 border-l-2 border-cobalt pl-5">
        <p className="display text-[20px] leading-[1.4] tracking-[-0.01em]">
          {children}
        </p>
      </blockquote>
    ),
    ul: ({ children }) => (
      <ul className="mt-5 list-disc space-y-2 pl-5 text-[16px] leading-[1.7] text-[#4a463c]">
        {children}
      </ul>
    ),
    li: ({ children }) => <li>{children}</li>,
    ...components,
  }
}
