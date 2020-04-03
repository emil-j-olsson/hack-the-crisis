import numpy as np
from sklearn.cluster import MeanShift
from sklearn.datasets import make_blobs
import matplotlib.pyplot as plt

# Dummy data
cluster_centers = [[1,1], [5,5], [3,10]]
X, _ = make_blobs(n_samples=500, centers=cluster_centers, cluster_std=1)

# Plot
#plt.scatter(X[:,0], X[:,1])
#plt.show()

# ML
# Might need to reduce outliers --> No risk zone
ms = MeanShift()
ms.fit(X)
labels = ms.labels_
cluster_centers = ms.cluster_centers_
n_clusters = len(np.unique(labels))
n_elements = dict(zip(*np.unique(np.array(labels), return_counts=True)))
#print(n_elements[0])

print('Predicted # of clusters: ', n_clusters)
print('Predicted # of points in clusters: ', n_elements)

colors = 10*['r.', 'g.', 'b.', 'c.', 'k.', 'y.', 'm.']

print(colors)
print(labels)

for i in range(len(X)):
    plt.plot(X[i][0], X[i][1], colors[labels[i]], markersize=10)

plt.scatter(cluster_centers[:,0], cluster_centers[:,1], marker='x', s=150, linewidths=5, zorder=10)
plt.show()