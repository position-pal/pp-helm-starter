#!/bin/bash
NEW_VERSION=$1
CHART_YAML="your-chart-directory/Chart.yaml"
sed -i "s/^appVersion:.*/appVersion: \"$NEW_VERSION\"/" "$CHART_YAML"
git add "$CHART_YAML"