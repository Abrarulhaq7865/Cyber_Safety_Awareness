<button
  type="button"
  onClick={() => {
    const link = categoryLinks[article.category.en];
    // debug: uncomment to verify the resolved link in devtools
    // console.log('Read link for', article.category.en, link);

    if (link) {
      // Try to open in a new tab. If popup blocked, navigate in the same tab as fallback.
      const newWin = window.open(link, '_blank', 'noopener,noreferrer');
      if (newWin) {
        try { newWin.opener = null; } catch (err) { /* ignore */ }
      } else {
        // Popup blocked — fallback to same-tab navigation
        window.location.href = link;
      }
    } else {
      // No external resource for this category — open the in-app modal
      setSelectedArticle(article);
    }
  }}
  className="flex items-center gap-1 text-xs text-cyber-primary hover:gap-2 transition-all font-semibold"
>
  {isTelugu ? 'చదవండి' : 'Read'} <ArrowRight className="w-3.5 h-3.5" />
</button>
